# WasteSmart API Documentation

## Predicts

- Endpoint: /predicts
- Method: POST
- Request Body: form-data
-       key: image file (jpg, png, etc.)
- Response Code: 200 OK
- Response Body
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

## Encyclopedia

- Endpoint: /encyclopedia
- Method: GET
- Response Code: 200 OK
- Response Body

  ```
  {
    "success": true,
    "waste": {
        "general_description": "Sampah adalah...",
        "image_url": "https://storage.googleapis.com/..."
    }
  }

  ```

- Endpoint: /encyclopedia/organik
            | /encyclopedia/anorganik
            | /encyclopedia/b3
- Method: GET
- Response Code: 200 OK
- Response Body
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

## Quiz

- Endpoint: /quiz
- Method: GET
- Response Code: 200 OK
- Response Body
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

## Funfacts

- Endpoint: /funfacts
- Method: GET
- Response Code: 200 OK
- Response Body
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

## Tips

- Endpoint: /tips
- Method: GET
- Response Code: 200 OK
- Response Body
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
