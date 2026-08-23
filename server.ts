import express from 'express';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add Security Headers
  app.use((req, res, next) => {
    // 1. Strict-Transport-Security
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    
    // 2. X-Frame-Options
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    
    // 3. X-Content-Type-Options
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // 4. Referrer-Policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // 5. Permissions-Policy
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    
    // 6. Content-Security-Policy
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://image.pollinations.ai https://drive.google.com https://*.googleusercontent.com",
      "connect-src 'self' ws: wss: https://generativelanguage.googleapis.com",
      "frame-src 'self' https://www.google.com https://maps.google.com",
      "object-src 'none'",
      "base-uri 'self'"
    ].join('; ');
    
    res.setHeader('Content-Security-Policy', csp);
    
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // SPA Fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
