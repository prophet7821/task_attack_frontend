# ByteBloom Blog Platform(Frontend)

## Description
ByteBloom Blog Platform's frontend allows users to explore, create, and manage blog posts. The platform features user authentication, post creation, and search functionality. Built using Next.js 14 and TypeScript, it ensures a seamless and dynamic user experience.


## Tech Stack
- **Frontend**: NextJS 14 with TypeScript
- **Styling**: Material UI

## Minimum Requirements
- Node.js (>=14.x)
- Yarn

## Setup Instructions

### Package Installation

```bash
yarn install
```

### Running the Application

```bash
yarn dev
```
The server will start on http://localhost:3000.

## Pages

### `/` - HomePage
Displays all available posts. Users can browse and read posts.

### `/login` - Login Page
Allows users to log in using their email and password.

### `/signUp` - SignUp Page
Enables new users to create an account by providing their name, email, and password.

### `/[postID]` - Individual Post Page
Displays the content of a specific post identified by its `postID`.

### `/dashboard` - Dashboard Page
Authenticated users can create new blog posts here.

### Search Functionality
The NavBar includes a search input where users can type an author's name and hit enter to search for posts by that author.

## API Integration
The frontend interacts with the backend via API endpoints. Ensure the backend is running.

## Example Usage

1. **Home Page**:
    - Access all posts.
    - Browse through the list of posts.
    - Use the search functionality to find posts by a specific author.

2. **Login Page**:
    - Navigate to `/login`.
    - Enter email and password to log in.

3. **Sign Up Page**:
    - Navigate to `/signUp`.
    - Provide name, email, and password to create a new account.

4. **Individual Post Page**:
    - Navigate to a specific post using its ID, e.g., `/12345`.
    - Read the full content of the post.

5. **Dashboard Page**:
    - Navigate to `/dashboard` (requires authentication).
    - Create a new post by providing a title and content.