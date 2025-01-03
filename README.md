# Storybook-LWC

This repository contains a setup for using Storybook with the LWC (Lightning Web Components) Webpack plugin. It allows you to preview and document your LWC component library online.

## Getting Started

To get started with this project, follow these steps:

### 1. **Install Dependencies**
   ```bash
   npm install
   ```

### 2. **Run Storybook Locally**
To run Storybook locally for development:
   ```bash
   npm run storybook
   ```

### 3. **Build and Deploy with Docker**
This project includes a `Dockerfile` to simplify the process of building and deploying the project in a containerized environment.

#### Build Docker Image
To build the Docker image:
   ```bash
   docker build -t storybook-lwc .
   ```

#### Run Docker Container
To start the container and serve the Storybook application:
   ```bash
   docker run -p 6006:6006 storybook-lwc
   ```

Once the container is running, you can access the Storybook application in your browser at `http://localhost:6006`.

## Project Structure

- **LWC Components**: Place all LWC components in the `src/modules/c` directory.
- **Stories and Documentation**: Place all `.story.js` and `.mdx` files in the `stories` directory.

## Usage

This setup enables you to explore and document your LWC components interactively. You can view different states of each component and their corresponding documentation.

## Contributing

If you wish to contribute to this project, please follow the standard Git workflow:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Submit a pull request.

We appreciate your contributions!

## License

This project is licensed under the GNU General Public License. See the `LICENSE` file for more details.
