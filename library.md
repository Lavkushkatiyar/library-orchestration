1. User asks to borrow a book (Serial)

User clicks “Borrow” or asks the librarian.

1. Get needed information (Parallel)

At the same time, the system:

Gets user details

Gets book details

Checks how many copies are available

These can run together because they do not depend on each other.

3. Check if user is allowed (Serial)

User account is active

User has not borrowed too many books

User has no blocked account

Must finish before moving on.

4. Check if book can be borrowed (Serial)

At least one copy is free

No one else is waiting for it

5. Save one copy for this user (Serial)

Mark one copy as “taken”

This step must be done alone to avoid two users taking the same book

6. Update records (Parallel)

At the same time:

Create borrow record

Update book count

Update user borrowed count

7. Send messages and logs (Parallel)

Send confirmation to user

Write logs for the system

8. Finish and respond (Serial)

Show success message

Show return date

Simple Rule

Parallel: reading data, sending messages, saving independent records

Serial: checks, decisions, and reserving the book
