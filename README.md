```markdown
# DowntimeDB - Downtime Calculator Web Application

Welcome to the Downtime Calculator Web Application repository. This tool is designed to help manufacturers and operations managers quickly estimate the direct labor costs of machine downtime as well as the additional costs of tracking downtime using conventional methods like paper reports or spreadsheets. In addition, the calculator highlights potential savings by reducing downtime through improved tracking and management practices.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Installation & Setup](#installation--setup)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Overview

The Downtime Calculator Web Application is a user-friendly tool that calculates:

- **Direct Labor Cost of Downtime:** Estimate the costs based on variables like the number of employees per machine, number of machines, minutes of downtime per shift, shifts per day, working days per year, and average labor rate per hour.
- **Cost of Downtime Tracking:** Evaluate the labor cost associated with tracking downtime manually (e.g., using spreadsheets or paper reports), considering factors such as the number of employees tracking downtime, time per shift spent on reports, and tracking labor rates.
- **Potential Savings:** Estimate annual savings achievable by reducing downtime by various percentages. The calculator factors in the annual cost of using DowntimeDB, downtime tracking cost, and direct downtime costs to present a clear financial benefit.

**Note:** While the calculator focuses on direct labor and tracking costs, there are additional downtime-associated costs such as overtime, inventory costs, maintenance labor, lost revenue, and extra repair costs that are not included in the primary calculation.

---

## Features

- **User-Friendly Interface:** Simple sign in and account creation.
- **Interactive Calculations:** Instantly update calculations on variable changes – just click on the **Recalculate** button.
- **Detailed Breakdown:**
  - **Downtime Direct Labor Cost:** Input fields for machine parameters and labor rates.
  - **Downtime Tracking Cost:** Inputs for tracking efforts and associated labor.
  - **Savings Projections:** Visual breakdown of potential savings at 10%, 20%, 30%, 50%, and 75% downtime reduction.
- **Comprehensive Insights:** Additional details on other costs of downtime such as overtime, inventory increases, maintenance labor, revenue loss, and extra repair expenses.
- **Responsive Design:** Adaptable to various screen sizes ensuring ease of use on desktops and mobile devices.

---

## Demo

A live demo of the application is available. To explore the calculator in action:

- Visit the [Demo Page](#) (replace with actual URL if available).
- Sign in with your credentials or create an account if you’re a new user.

---

## Usage

1. **Sign In / Create Account:**  
   - Access the application via the sign in page.
   - New users can create an account using the provided registration form.

2. **Input Data:**  
   - Enter the required variables for machine downtime and tracking costs.
   - The input fields include:
     - **Downtime Direct Labor Cost:**
       - Number of employees at each machine
       - Number of machines
       - Minutes of downtime per machine per shift
       - Number of shifts per day
       - Number of working days per year
       - Average Labor Rate per hour (USD)
     - **Downtime Tracking Cost:**
       - Number of employees tracking downtime per shift
       - Minutes per shift needed to create downtime reports
       - Number of shifts worked per day
       - Average Labor Rate per hour for tracking downtime (USD)
       - Annual Cost of DowntimeDB

3. **Recalculate:**  
   - After adjusting any variable, click on the **Recalculate** button to update the cost estimates instantly.

4. **Review Savings:**  
   - Scroll down to view the potential labor savings based on different percentages of downtime reduction. For example:
     - **10% Reduction:**  
       - Direct Downtime Savings = $74,100.00  
       - Total Savings (after accounting for tracking and service cost) ≈ $57,881.00 per year.
     - **Other percentages (20%, 30%, 50%, 75%) are similarly calculated.**

5. **Explore Additional Information:**  
   - Detailed descriptions and guides about additional downtime costs (e.g., overtime, inventory, maintenance, revenue loss) are provided at the bottom of the page.

---

## Screenshots

![Downtime Calculator Header](path/to/header-image.png)  
*Header image for the Downtime Calculator Web Application.*

---

## Installation & Setup

To run this application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/downtimedb.git
   cd downtimedb
   ```

2. **Install Dependencies:**  
   Ensure you have [Node.js](https://nodejs.org/) (or the required runtime) installed, then run:

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**  
   Create a `.env` file in the root directory with the following sample configuration (modify as necessary):

   ```env
   PORT=3000
   DATABASE_URL=your_database_connection_string
   API_KEY=your_api_key
   ```

4. **Start the Application:**

   ```bash
   npm start
   ```

5. **Access Locally:**  
   Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Contributing

Contributions are welcome! If you wish to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Open a pull request.

Please ensure your code adheres to the project’s coding guidelines and standards.

---
