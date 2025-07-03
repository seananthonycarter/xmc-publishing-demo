/* eslint-disable */

export default async function handler(req: any, res: any) {
    console.log(`[revalidation]: Start. Request: ${JSON.stringify(req.body)}`);

    if (req.query.secret !== process.env.ISR_REVALIDATE_TOKEN) {
      console.log(`[revalidate]: invalid token passed in "secret" param "${req.query.secret}"`)
      return res.status(401).json({ message: 'Invalid token' })
    }

    const pathToRevalidate = req.query.path;
    console.log('path to revalidate : ' + pathToRevalidate);
  
    try {
      const response = await res.revalidate(pathToRevalidate);
      console.log(response);
      return res.json({revalidated: true})

    } catch (err) {
      return res.status(500).send(`Error revalidating ${err}`)
    }
  }