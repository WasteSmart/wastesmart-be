# WasteSmart Backend Application

This backend application is designed to predict the type of waste and provide a source of knowledge about waste management through encyclopedia, quizzes, funfacts, and tips. This application does not require login, so it is ready to be used directly by users to get useful information about waste and how to manage it.

## Description
This application has a main feature, namely Waste Type Detection: Allows users to predict the type of waste based on the input provided. This application is built using the JavaScript programming language with the help of the Express.js framework.

## Endpoints API

### 1. POST /predicts
- Description: can predict the type of waste based on the uploaded image
- Request Body: form-data
    ```
    key: image
    file format: jpg, jpeg, png, etc (image format)
    ```
- Response
  ```
  {
    "success": true,
    "result": [
        {
            "id": 1,
            "name": "metal",
            "percentage": 67
        },
        {
            "id": 2,
            "name": "glass",
            "percentage": 32
        },
        {
            "id": 3,
            "name": "shoes",
            "percentage": 0
        }
    ]
  }
  ```

### 2. Encyclopedia
#### A. GET /encyclopedia
- Description: Information about waste, types of waste and how to manage it
- Response

  ```
  {
    "success": true,
    "waste": {
        "general_description": "Sampah adalah...",
        "image_url": "https://storage.googleapis.com/..."
    }
  }
  ```
#### B. GET /encyclopedia/organik
- Description: Information about types of organik waste and how to manage it
- Response
  ```
  {
    "success": true,
    "type_of_waste": {
        "id": 1,
        "title": "Sampah Organik",
        "examples": [
            {
                "id": 11,
                "description": "Sampah sisa makanan...",
                "image_url": "https://storage.googleapis.com/...",
                "title": "Sisa makanan & tumbuhan"
            }
        ],
        "description": "Sampah organik adalah...",
        "image_url": "https://storage.googleapis.com/...",
        "how_to_manage": "Pengelolaan sampah organik..."
    }
  }
  ```
#### C. GET /encyclopedia/anorganik
- Description: Information about types of anorganik waste and how to manage it
- Response
  ```
  {
    "success": true,
    "type_of_waste": {
        "id": 1,
        "title": "Sampah Anorganik",
        "examples": [
            {
                "id": 11,
                "description": "Sampah plastik merupakan...",
                "image_url": "https://storage.googleapis.com/...",
                "title": "Plastik"
            }
        ],
        "description": "Sampah anorganik adalah jenis limbah...",
        "image_url": "https://storage.googleapis.com/...",
        "how_to_manage": "Pengelolaan sampah anorganik..."
    }
  }
  ```
#### D. GET /encyclopedia/b3
- Description: Information about types of B3 waste and how to manage it
- Response
  ```
  {
    "success": true,
    "type_of_waste": {
        "id": 1,
        "title": "Sampah B3",
        "examples": [
            {
                "id": 11,
                "description": "Sampah baterai merupakan limbah berbahaya...",
                "image_url": "https://storage.googleapis.com/...",
                "title": "Baterai"
            }
        ],
        "description": "Sampah B3 adalah...",
        "image_url": "https://storage.googleapis.com/...",
        "how_to_manage": "Metode paling dasar dalam mengelola sampah B3..."
    }
  }
  ```
### 3. GET /quiz
- Description: A quiz that helps users test their knowledge of waste management.
- Response
  ```
    {
    "success": true,
    "quiz": [
        {
            "id": 11,
            "question": "Apa yang...",
            "options": [
                {
                    "id": 111,
                    "text": "Sampah..."
                },
            ],
            "answer": {
                "id": 113,
                "text": "Sampah yang..."
            }
        },
        ...
        ]
  }
  ```

### 4. GET /funfacts
- Description: Interesting facts about waste and the environment.
- Response
  ```
  {
    "success": true,
    "funfacts": [
        "Indonesia adalah...",
        "Banyak kota...",
        "Fasilitas Daur...",
          ...
      ]
  }
  ```

### 5. GET /tips
- Description: Provides advice and guidance on reducing, recycling and managing waste.
- Response
  ```
  {
    "success": true,
    "tips": {
        "sisa_makanan": "Kumpulkan...",
        "plastik": "Pisahkan...",
        "logam": "Pisahkan sampah...",
        ...
      }
  }
  ```
## Installation
### 1. Clone repository:
  ```
  git clone https://github.com/WasteSmart/wastesmart-be.git
  ```
### 2. Install dependencies:
  ```
  cd wastesmart-be
  npm install
  ```
### 3. Set environment variables in the .env file (if needed).
### 4. Run the server:
  ```
  npm run start
  ```
