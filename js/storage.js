const BloodBankStorage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};

if (typeof window !== 'undefined') {
  window.BloodBankStorage = BloodBankStorage;
}
