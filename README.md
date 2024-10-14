# 4am Media - Next.js Proficiency Test

## Objective
This coding exercise challenges you to complete a simple e-commerce web application. The app offers a primary product with multiple upsells. Your main task is to implement server-side session state to persist the user order details. 

You'll work alongside a 4AM engineer, discussing and troubleshooting your implementation. Use this time to showcase your strongest skills.

## Tasks

### 1. URL Parameter Setup
- Locate the `useEffect` hook in the `/` (home) page
- Set the URL parameter in the `start-session` call with the full url including all UTM parameters


### 2. Implement Session Updates
- Call an `update-session` API route in the `/upsell1` and `/upsell2` pages
- Pass a `field` value of `upsell1` or `upsell2`
- Pass a `value` boolean of `true`/`false` based on user selection
- Pass the `sessionId`

### 3. Create an Update Session API Route
- Implement the `update-session` API route
- This route should:
  - Take three parameters you provided: `sessionId`, `field`, and `value`
  - Use the `sessionId` provided by `start-session` to retrieve the current `sessionData` from the Vercel KV database
  - Update only the specified `field` with the new `value`, **leaving other fields unchanged**
  - Store the updated `sessionData` back in the Vercel KV database
- Example of how to update a specific field in a session:

```typescript
const sessionKey = `session:${sessionId}`;
const currentSessionData = await kv.get(sessionKey);

//build an updatedSessionData object here


// update the sessionData in kv
await kv.set(sessionKey, updatedSessionData);
```


### 4. Stop Duplicate API Calls
- Explain why the session is created and fetched twice
- Implement a fix so it only does it once


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
