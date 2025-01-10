```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}

//middleware.js (if applicable)
export function middleware(req) {
  // ...middleware logic...
}
export const config = {
  matcher: ['/']
}
```