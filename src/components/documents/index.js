module.exports = ({ targetAudience, marketSizeEstimates, productDescription, revenueProjections, fundingRequirements,  teamInfo, companyGoal }) => {
    const today = new Date();
return `
<!doctype html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One Page Pitch</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f3f4f6;
        }
        .form-container {
            width: 80%;
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .form-container h2 {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
            font-size: 1.5rem;
            font-weight: 600;
            color: rgb(1, 75, 91);
        }
        .form-container label {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 1rem;
            margin-bottom: 0.5rem; 
            color: black; 
            font-weight: bold;
        }
        p{
            width: 50%;
        }
        .doubleValues{
            display: flex;
            gap: 50px;
        }
        #productDescription{
            width: 100%;
        }
        #revenueProjections{
            width: 50%;
        }
        #targetAudience{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
        }
        #marketSizeEstimates{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
        }
        #marketAnalysis{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-top: 0.5rem;
        }
        #productDescription{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
        }
        #revenueProjections{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
        }
        #fundingRequirements{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
        }
        #teamInfo{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
            width: 100%;
        }
        #goal{
            border-bottom: 1px solid gray;
            border-width: 1px;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
            width: 100%;
        } 
    </style>
</head>

<body>
    <div class="container">
        <div class="form-container">
            <h2>One Page Pitch</h2>

            <label for="marketAnalysis">Market Analysis
            </label>
           <div class="doubleValues">
            <p id="targetAudience" name="targetAudience">${targetAudience}</p>
            <p id="marketSizeEstimates" name="marketSizeEstimates">${marketSizeEstimates}</p>
           </div>


            <label for="productDescription">Product Description
            </label>
            <p id="productDescription" name="productDescription">${productDescription}</p>


            <label for="financialData">Financial Data
            </label>
            <div class="doubleValues">
            <p id="revenueProjections" name="revenueProjections">${revenueProjections}</p>
            <p id="fundingRequirements" name="fundingRequirements">${fundingRequirements}</p>

            </div>

            <label for="teamInfo">Team Info
            </label>
            <p id="teamInfo" name="teamInfo">${teamInfo}</p>

            <label for="Goal">Goals
            </label>
            <p id="goal" name="goal">${goal}</p>


        </div>
    </div>
</body>

</html>
    `;
};