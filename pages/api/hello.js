// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const { id = null, record = null } = req.query;
        // const timestamp = new Date();

        const t = `
          ok - ${id}
        `;

        return res.end(t);
      } catch (error) {
        return res.end('bad'); 
      }
    default:
      return res.end('missed');
  }
}
