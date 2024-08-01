import numpy as np
import pandas as pd
import pickle
from sklearn.preprocessing import LabelEncoder, OneHotEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier

class FitnessPredictor:
    def __init__(self):
        # Load the dataset
        df = pd.read_csv('BodyFitnessPrediction.csv')

        # Encode categorical variables
        le = LabelEncoder()
        df['bool_of_active'] = le.fit_transform(df['bool_of_active'])
        df['mood'] = le.fit_transform(df['mood'])

        # Independent variables
        x = df.iloc[:, [1, 2, 3, 4, 6]].values
        # Dependent Variable
        y = df.iloc[:, 5].values

        # Get unique categories for mood and bool_of_active
        mood_categories = np.unique(x[:, 1])
        bool_of_active_categories = np.unique(x[:, 4])

        # One-hot encode categorical variables
        oh = OneHotEncoder(categories=[bool_of_active_categories, mood_categories])
        temp = oh.fit_transform(x[:, [4, 1]]).toarray()
        x = np.delete(x, [4, 1], axis=1)
        x = np.concatenate((temp, x), axis=1)

        # Splitting the dataset into Train set and Test set
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.1, random_state=0)

        # Apply normalization to rescale the features to a standard range of values.
        scaler = StandardScaler()
        self.x_train = scaler.fit_transform(x_train)
        self.x_test = scaler.transform(x_test)

        # Train the model
        self.gb = GradientBoostingClassifier(max_depth=3)
        self.gb.fit(self.x_train, y_train)

        # Save the model to disk
        pickle.dump(self.gb, open('gbmodel.pkl', 'wb'))

    def predict_fitness(self, input_data):
        # Load the model from disk
        model = pickle.load(open('gbmodel.pkl', 'rb'))
        # Perform prediction
        prediction = model.predict(input_data)
        return prediction

    def get_last_predicted_value(self):
        # Get the last row from the test set
        last_input_data = self.x_test[-1].reshape(1, -1)
        # Predict fitness for the last input data
        last_predicted_fitness = self.predict_fitness(last_input_data)
        return last_predicted_fitness
