// const handlePredictSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//         // Convert predictionData to JSON format
//         const requestData = JSON.stringify(predictionData);

//         // Send form data to backend for prediction
//         const response = await axios.post('/predict', requestData, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         // Determine fitness level based on prediction result
//         const fitnessLevel = response.data.prediction === 'Fit' ? 'Fit' : 'Not Fit';
        
//         // Set prediction result
//         setPredictionResult(fitnessLevel);
//     } catch (error) {
//         console.error('Prediction error:', error);
//         setError('Failed to get prediction');
//     } finally {
//         setIsLoading(false);
//     }
// };
