const path = require('path');
const functions = require('firebase-functions');

exports.createDonation = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required.');
  }

  return {
    status: 'submitted',
    donationId: `CD-${Date.now()}`,
    message: 'Donation created successfully.',
  };
});

exports.createRequest = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required.');
  }

  return {
    status: 'submitted',
    requestId: `REQ-${Date.now()}`,
    message: 'Resource request received.',
  };
});

exports.generateMatchScores = functions.https.onCall(async (data) => {
  return {
    matches: [
      { requestId: 'REQ-1042', score: 94, reason: 'Category match and critical urgency.' },
      { requestId: 'REQ-1046', score: 71, reason: 'Good match but longer distance.' },
    ],
  };
});
