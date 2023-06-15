const crypto = require("crypto");

function getCandidate(event) {
  if (event && event.partitionKey) {
    return event.partitionKey;
  }

  const data = JSON.stringify(even, partitionKey);
  return crypto.createHash("sha3-512").update(data).digest("hex") || partitionKey;
}

function encryptCandidate(candidate) {
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  return crypto.createHash("sha3-512").update(candidate).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = getCandidate(event);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = encryptCandidate(candidate, TRIVIAL_PARTITION_KEY);
  }

  return candidate;
};
