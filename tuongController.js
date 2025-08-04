const data = require('../data/kienthuc.json');

exports.phanTichTheoTen = (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ message: 'Thiếu tên' });

  const score = name.length % data.length;
  const bo_phan = data[score];
  const result = `Tên "${name}" cho thấy người này có ${bo_phan.bo_phan} nổi bật. ${bo_phan.tuong_so}`;
  res.json({ result });
};

exports.kienThuc = (req, res) => {
  res.json(data);
};
