// utils/auth.js

export function isUserAuthorized(sessionData, userType) {
    
  return sessionData && sessionData.userType === userType;
}