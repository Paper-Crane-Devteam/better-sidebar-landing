---
title: Privacy Policy
description: Learn how Better Sidebar handles your data. Local-first architecture, no data collection, full privacy.
---

# Privacy Policy

*Last Updated: March 10, 2026*

This Privacy Policy describes how **Better Sidebar for Gemini & AI Studio** ("we", "our", or "the Extension") handles your information. We are committed to protecting your privacy and ensuring you have full control over your data.

## 1. Local-First Architecture

The Extension is designed with a "Local-First" architecture:

- All organizational data (folders, tags, favorites, notes) is stored locally on your device using an embedded **SQLite WASM** database within your browser.
- We do not operate a cloud server to store your data. Your data stays on your machine.
- The Extension interacts with the Gemini and AI Studio pages to identify your conversations for organizing them. We do not transmit this content to any third-party servers.

## 2. What We Do NOT Collect

- We do **not** collect, store, or transmit your chat history, prompts, or generated responses to our servers.
- We do **not** collect personal identification information (PII) such as your name, email address, or phone number.
- We do **not** track your browsing history outside of the supported platform domains.

## 3. Google Drive Sync

The Extension offers an optional Google Drive sync feature:

- **What is synced:** Settings, prompts, and configuration data only.
- **What is NOT synced:** Chat history, conversation content, and personal messages are never uploaded to Google Drive.
- **OAuth scope:** The Extension uses the `drive.appdata` scope, which limits access to a hidden, app-specific folder in your Google Drive. The Extension cannot read or modify any other files in your Drive.
- Sync is initiated manually by you. No automatic background uploads occur.

## 4. Permissions

The Extension requires specific permissions to function:

- `storage`: To save your settings and preferences locally.
- `activeTab` / `host_permissions`: To modify the interface on **gemini.google.com** and **aistudio.google.com** (injecting the sidebar overlay) and read conversation titles/IDs to enable folder organization.
- `offscreen`: To run the SQLite database securely in a separate context.
- `identity`: To authenticate with Google for the optional Drive sync feature.

## 5. Third-Party Services

- **Google Gemini & AI Studio:** The Extension operates on top of these platforms. Your use of them is subject to Google's own Privacy Policy and Terms of Service.
- **Google Drive:** Used only for the optional sync feature described in Section 3. Data is stored in a hidden app-specific folder and is not accessible to other applications.
- **Feedback Form:** If you use the Feedback form, the message (including your email if provided) is sent via a third-party email service (EmailJS) directly to our support team. This is the only instance where data leaves your browser, and it is initiated solely by you.

## 6. Data Backup and Export

Since your data is stored locally, you are responsible for backing it up. The Extension provides an Export feature that generates a DB file of your organizational data. We strongly recommend regular backups, especially before clearing your browser data.

## 7. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

## 8. Contact Us

If you have any questions about this Privacy Policy, please contact us via the [GitHub Issues page](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues).
