import "./dotenv.js";
import { pool } from "./database.js";
import alertData from "../data/alerts.js";

async function createAlertsTable() {
  const createTableQuery = `
    DROP TABLE IF EXISTS alerts

    CREATE TABLE IF NOT EXISTS alerts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      severity VARCHAR(255) NOT NULL,
      service VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      submittedBy VARCHAR(255) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 alerts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating alerts table", err);
  }
}

const seedAlertsTable = async () => {
  await createAlertsTable();

  alertData.forEach((alert) => {
    const insertQuery = {
      text: "INSERT INTO alerts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };

    const values = [
      alert.name,
      alert,severity,
      alert.service,
      alert.image,
      alert.description,
      alert.submittedBy,
      alert.submittedOn,
    ];

    pool.query(insertQuery, values, (err) => {
      if (err) {
        console.error("⚠️ error inserting alert", err);
        return;
      }

      console.log(`✅ ${alert.name} added successfully`);
    });
  });
};

seedAlertsTable();