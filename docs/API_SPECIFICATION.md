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
