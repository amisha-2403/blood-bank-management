const BloodBankAuth = {
  login(email, password) {
    if (!email || !password) {
      return { success: false, message: 'Email and password are required.' };
    }

    const user = {
      email,
      password,
      loggedInAt: new Date().toISOString()
    };

    localStorage.setItem('bloodbank_user', JSON.stringify(user));
    return { success: true, message: 'Login successful.' };
  },

  register(payload) {
    if (!payload || !payload.email || !payload.password) {
      return { success: false, message: 'Complete registration information.' };
    }

    localStorage.setItem('bloodbank_user', JSON.stringify(payload));
    return { success: true, message: 'Registration successful.' };
  },

  logout() {
    localStorage.removeItem('bloodbank_user');
  },

  getCurrentUser() {
    const user = localStorage.getItem('bloodbank_user');
    return user ? JSON.parse(user) : null;
  }
};

if (typeof window !== 'undefined') {
  window.BloodBankAuth = BloodBankAuth;
}
