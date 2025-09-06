@@ .. @@
 const express = require('express');
 const cors = require('cors');
 const helmet = require('helmet');
 const morgan = require('morgan');
 const rateLimit = require('express-rate-limit');
 const mongoose = require('mongoose');
+const session = require('express-session');
+const MongoStore = require('connect-mongo');
 require('dotenv').config();
@@ .. @@
 // Body parsing
 app.use(express.json({ limit: '10mb' }));
 app.use(express.urlencoded({ extended: true, limit: '10mb' }));

+// Session configuration
+app.use(session({
+  secret: process.env.SESSION_SECRET || 'your-super-secret-session-key',
+  resave: false,
+  saveUninitialized: false,
+  store: MongoStore.create({
+    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/codingarena',
+    touchAfter: 24 * 3600 // lazy session update
+  }),
+  cookie: {
+    secure: process.env.NODE_ENV === 'production',
+    httpOnly: true,
+    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
+  }
+}));
+
 // Database connection with retry logic