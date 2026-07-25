# Portfolio Backend API Specification

This document details the REST API endpoints, request/response models, rate limits, and authentication flow for the portfolio backend.

## Authentication Module

The authentication module handles user registration, login, token refresh, and email verification. JWT is used for authorization.

### POST /api/v1/auth/register

Registers a new user/administrator in the system.

- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "user@example.com",
    "password": "strongpassword123"
  }
  ```
- **Responses:**
  - `201 Created`: Account created successfully, verification email sent.
  - `400 Bad Request`: Invalid input data or email already exists.

### POST /api/v1/auth/login

Authenticates a user and returns access and refresh tokens.

- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "strongpassword123"
  }
  ```
- **Responses:**
  - `200 OK`: Login successful. Sets refresh token HTTP-only cookie.
  - `401 Unauthorized`: Invalid credentials.

### POST /api/v1/auth/logout

Clears the refresh token cookie and invalidates the session.

- **Responses:**
  - `200 OK`: Logout successful.

### POST /api/v1/auth/verify-email

Requests a verification code OTP to be sent to the user's email.

- **Request Body:**
  ```json
  {
    "email": "user@example.com"
  }
  ```

### POST /api/v1/auth/verify-otp

Validates the OTP code received via email.

- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "otp": "123456"
  }
  ```

### POST /api/v1/auth/reset-password

Allows resetting password using a verified OTP token.

- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "otp": "123456",
    "newPassword": "newSecurePassword123"
  }
  ```

### POST /api/v1/auth/refresh-token

Generates a new access token using the HTTP-only refresh token.

- **Headers:**
  - Cookie: `refreshToken=<token>`
- **Responses:**
  - `200 OK`: Returns new access token.

## Contact Module

Handles user inquiries, messages, and contact submissions from the portfolio frontend website.

### POST /api/v1/contact

Submits a contact/inquiry form message.

- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Collab inquiry",
    "message": "Hello, I would like to collaborate on a project."
  }
  ```

### GET /api/v1/contact

Retrieves all submitted contact messages. (Admin access required).

- **Responses:**
  - `200 OK`: Returns array of contact messages.

### DELETE /api/v1/contact/:id

Deletes a contact message by its ID. (Admin access required).

## Dashboard Module

Provides summary metrics and system statistics to the administrative panel dashboard.

### GET /api/v1/dashboard/stats

Fetches total count of projects, skills, contact queries, and recent activity logs.

- **Stats Response Example:**
  ```json
  {
    "projectsCount": 12,
    "skillsCount": 24,
    "unreadContacts": 3,
    "systemStatus": "healthy"
  }
  ```

## Experience Module

Manages professional career history entries displayed on the portfolio timeline.

### POST /api/v1/experience

Creates a new experience entry. (Admin only).

- **Request Body:**
  ```json
  {
    "company": "Tech Corp",
    "role": "Senior Engineer",
    "duration": "2022 - Present",
    "description": "Led backend development projects."
  }
  ```
