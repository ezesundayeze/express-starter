const rateLimit = require("express-rate-limit");
const response = require("../apiResponse");
/*
windowMs – This is the window size (60 minutes in our case) in milliseconds
max – This represents the number of allowed requests per window per user in our case it's (5)
message – This specifies the response message users get when they have exceed the allowed limit
headers – This specifies whether the appropriate headers should be added to the response showing the enforced limit (X-RateLimit-Limit), current usage (X-RateLimit-Remaining), and time to wait before retrying (Retry-After) when the limit is reached
*/
const ratelimit = rateLimit({
  windowMs: 60 * 1000, // milliseconds - how long to keep records of requests in memory
  max: 100, // max number of recent connections during `window` milliseconds before sending a 429 response
  message: "Too many requests, please try again later.",
  statusCode: 429, // 429 status = Too Many Requests (RFC 6585)
  headers: true, //Send custom rate limit header with limit and remaining
  draft_polli_ratelimit_headers: false, //Support for the new RateLimit standardization headers
  skipFailedRequests: false, // Do not count failed requests (status >= 400)
  skipSuccessfulRequests: false, // Do not count successful requests (status < 400)
  handler: (req, res, next) => {
    res
      .status(429)
      .json(response.error("Too many requests, please try again later.", 429));
  },
});

module.exports = ratelimit;
