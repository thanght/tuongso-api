const jwt = require('jsonwebtoken');

const users = [
  { username: 'admin', password: '123456Aa@' } // demo user
];

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });

  const token = jwt.sign({ username }, 'SECRET_KEY');
  res.json({ token });
};

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'Tài khoản đã tồn tại' });
  }
  users.push({ username, password });
  res.json({ message: 'Đăng ký thành công' });
};
