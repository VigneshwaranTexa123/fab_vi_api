import db from "../config/db.js";

export const getMachinePerformance = async (req, res) => {
  try {
    const { machine_no } = req.params;

    const [rows] = await db.query(
      `
      SELECT *
      FROM machine_performance
      WHERE machine_no = ?
      `,
      [machine_no]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Machine not found"
      });
    }

    const machine = rows[0];

    return res.status(200).json({
      success: true,
      data: machine
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};