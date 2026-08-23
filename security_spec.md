# Security Specification

## Data Invariants
- A submission must include name, email, phone, and service.
- The createdAt field must be the server timestamp.
- Anonymous users (unauthenticated users) can create submissions because this is a public contact form. Wait! We need to make sure anonymous users can write to it, or just allow anyone to create a submission?
Since the contact form doesn't log the user in, `allow create: if true;` might be necessary, but with strict schema validation and rate limiting if possible, though Firebase Rules can't rate limit well.
We will restrict `read`, `update`, and `delete` to `false` (or admins only).
Since we don't have admins explicitly set up, `allow read, update, delete: if false;`
Let's allow `create` for everyone but strictly validate the schema to prevent poisoning.

## The "Dirty Dozen" Payloads
1. Missing required field (name)
2. Missing required field (email)
3. Missing required field (phone)
4. Missing required field (service)
5. Missing required field (createdAt)
6. Invalid type (name is number)
7. Invalid length (name > 128 chars)
8. Invalid length (details > 2048 chars)
9. Ghost field injection (status: 'approved')
10. Spoofed createdAt (not request.time)
11. Update attempt (should be denied)
12. Read attempt (should be denied)
