# My Vercel Link

- https://saving-app-test.vercel.app/

# Savings App

The **Savings App** is a simple financial management application that allows users to track savings, view weekly interest, and withdraw funds. The app displays all members in the savings group, including their names, saved amounts, and interest rates, using reusable UI components.

---

## Features

### Member Savings Dashboard

- Displays all members in a responsive grid layout.
- Each member card shows:
  - **Name**
  - **Amount Saved**
  - **Weekly Interest Rate**
  - **Withdraw Button**

### Reusable Component Architecture

- All member data is rendered using a single reusable `MemberCard` component.
- The dashboard manages state updates and re-renders only the necessary components.

### Withdraw Function

- Users can remove a member from the savings list by clicking **Withdraw**.
- Automatically updates the dashboard and shows a message when no members are left.

### Mock Data Setup

- Member information is pre-loaded using a mock dataset in `constants/index.ts`.
- Includes placeholder names, saved amounts, and interest rates for testing.

---

## Project Structure
