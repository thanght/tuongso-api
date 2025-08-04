exports.analyzeFace = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Không có ảnh' });

  // Phân tích ảnh đơn giản (giả lập)
  const result = `Ảnh đã nhận: ${req.file.filename}. Gương mặt này cho thấy thông minh, nhanh nhẹn, nhân hậu.`;

  res.json({ result });
};
