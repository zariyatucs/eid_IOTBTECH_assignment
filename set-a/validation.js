const validators = {
  email(value) {
    if (!value || typeof value !== "string")
      return { valid: false, error: "Email is required" };
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(value.trim())
      ? { valid: true, error: null }
      : {
          valid: false,
          error: "Invalid email format (expected user@domain.com)",
        };
  },

  phone(value) {
    if (!value || typeof value !== "string")
      return { valid: false, error: "Phone number is required" };
    const re = /^(\+?\d{1,3}[\s.-]?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    return re.test(value.trim())
      ? { valid: true, error: null }
      : { valid: false, error: "Invalid phone number format" };
  },

  password(value) {
    if (!value || typeof value !== "string")
      return { valid: false, error: "Password is required" };
    if (value.length < 8)
      return { valid: false, error: "Password must be at least 8 characters" };
    if (!/[A-Z]/.test(value))
      return {
        valid: false,
        error: "Password must contain an uppercase letter",
      };
    if (!/[a-z]/.test(value))
      return {
        valid: false,
        error: "Password must contain a lowercase letter",
      };
    if (!/\d/.test(value))
      return { valid: false, error: "Password must contain a number" };
    if (!/[@$!%*?&#^()_+\-=]/.test(value))
      return {
        valid: false,
        error: "Password must contain a special character",
      };
    return { valid: true, error: null };
  },

  url(value) {
    if (!value || typeof value !== "string")
      return { valid: false, error: "URL is required" };
    try {
      const u = new URL(value.trim());
      if (!["http:", "https:"].includes(u.protocol))
        return {
          valid: false,
          error: "URL must start with http:// or https://",
        };
      return { valid: true, error: null };
    } catch {
      return { valid: false, error: "Invalid URL format" };
    }
  },

  date(value) {
    if (!value || typeof value !== "string")
      return { valid: false, error: "Date is required" };
    const re = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (!re.test(value))
      return { valid: false, error: "Date must be in YYYY-MM-DD format" };
    const d = new Date(value);
    if (isNaN(d.getTime()))
      return { valid: false, error: "Invalid calendar date" };
    return { valid: true, error: null };
  },
};

// Tests
console.log("=== Email ===");
console.log(validators.email("user@example.com")); // valid
console.log(validators.email("not-an-email")); // invalid

console.log("\n=== Phone ===");
console.log(validators.phone("+2348012345678")); // valid
console.log(validators.phone("08012345678")); // valid
console.log(validators.phone("123")); // invalid

console.log("\n=== Password ===");
console.log(validators.password("SecurePass1!")); // valid
console.log(validators.password("weak")); // invalid

console.log("\n=== URL ===");
console.log(validators.url("https://iotbtech.com")); // valid
console.log(validators.url("ftp://bad.com")); // invalid

console.log("\n=== Date ===");
console.log(validators.date("2026-06-01")); // valid
console.log(validators.date("2026-13-01")); // invalid
console.log(validators.date("01-06-2026")); // invalid

module.exports = validators;
