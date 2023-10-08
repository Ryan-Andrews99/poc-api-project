### Project Plan:

#### With the caveat that this was co-wrote with ChatGPT - so may be utter rubbish and amended.

1. **Initial Project Setup:**
      - Set up a new TypeScript project.
      - Initialise a Git repository for version control.
      - Configure a development environment with necessary tools (e.g., Node.js, TypeScript compiler).

2. **Express.js Server Setup:**
      - Create a basic Express.js server.
      - Implement middleware for standard headers and error handling
      - Request Validation: Implement robust request validation to ensure incoming data is well-formed and adheres to specified constraints, helping to prevent security vulnerabilities.

-

3. **Token-Based Authentication:**
      - Implement token-based authentication using a library like Passport.js or JWT.
      - Create endpoints requesting token
      - TTL on token, with TTL encoded in JWT
      - implement 401 on unauthorised requests

4. **Rate Limiting:**
      - Implement rate limiting to prevent abuse.
      - Define rate limits for different routes or user roles.
      - Implement auth/unauth rate limits

5. **Pagination:**
      - Implement pagination for resource endpoints.
      - Add query parameters to control page size and page number.

6. **Automated Testing:**
      - Implement integration testing using an appropriate tool (superTest)
      - Set up end-to-end testing framework.
      - Write end-to-end tests for critical user scenarios. (Why can't this make real requests)

7. **Deployment (After Automated Testing):**
      - Configure deployment scripts or CI/CD pipelines to deploy the API to your target environment (e.g., AWS, Heroku, etc.).
      - Automate deployment processes to ensure that the latest code changes are deployed reliably.
      - Perform deployment to both development and production environments as appropriate.
      - Container vs no contain
      - Maybe containerise just for the lolz

---

8. **GraphQL Integration:**
      - Offer a GraphQL API in addition to the REST API to provide clients with more flexibility in querying data.
      - Integrate GraphQL server.
      - Define GraphQL schema and resolvers.

9. **API Documentation Generation:**

- Automate API documentation generation using tools like Swagger/OpenAPI or GraphQL tools to keep documentation up-to-date.
     - Set up automated API documentation generation.
