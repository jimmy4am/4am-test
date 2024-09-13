# 4am Media - Next.js Proficiency Test

## Objective
This test aims to evaluate your proficiency with Next.js, API routes, TypeScript, and your ability to work with data. You'll implement a simple web application that tracks user checkout sessions across multiple upsell pages using Vercel KV for data storage. 

We are here to help. If you get stuck or have questions, please ask.

## Tasks

### 1. URL Parameter Setup
- Locate the `useEffect` hook in the `/` (home) page
- Set the URL parameter in the `start-session` call with the full url including all UTM parameters

### 2. Create an Update Session API Route
- Implement a new `update-session` API route
- This route should:
  - Take three parameters: `sessionId`, `field`, and `value`
  - Use the `sessionId` provided by `start-session` to retrieve the current `sessionData` from the Vercel KV database
  - Update only the specified `field` with the new `value`, leaving other fields unchanged
  - Store the updated `sessionData` back in the Vercel KV database
- Example of how to update a specific field in a session:

```typescript
const sessionKey = `session:${sessionId}`;
const currentSessionData = await kv.get(sessionKey);

const updatedSessionData = {
  ...currentSessionData,
  [field]: value,
  updatedAt: new Date().toISOString(),
};

await kv.set(sessionKey, updatedSessionData);
```

### 3. Implement Session Updates
- Utilize your `update-session` API route in the `/upsell1` and `/upsell2` pages
- Ensure that each page updates only the relevant fields for that step in the user journey

### 4. Test Your Code
- Ensure that session updates are correctly passed through the application
- Verify that each update modifies only the intended field(s) in the Vercel KV database
- Confirm that previously set fields remain unchanged when updating new fields

### 5. Additional Challenges (Time Permitting)
If you complete the above tasks and have time remaining, tackle one or more of these additional challenges. Discuss which one you would like to tackle before starting.

- Optimize the conversion rate
- Implement fraud protection for the API routes
- Define and implement a `sessionData` type
- Convert client-side rendered pages to server-side rendered (SSR) by removing "use client" directives and adjusting the code accordingly

## Evaluation Criteria
You will be assessed on:
- Code quality and organization
- Proper use of Next.js features and best practices
- TypeScript implementation
- API route design and implementation
- Effective use of Vercel KV for session storage
- Correct implementation of partial updates to session data
- Problem-solving skills
- Ability to handle increasing complexity



Good luck!