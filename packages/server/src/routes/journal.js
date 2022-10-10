export default function journal(journal) {
  return function (req, res) {
    res.send(journal);
  };
}
