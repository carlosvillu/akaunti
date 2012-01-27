IngCrawler = require 'ingcrawler'

crawler = new IngCrawler '/Users/cvilluendas/Proyectos/akaunti/uploads/efd493846f42c433c84e298b2ddfa14d.xls'

crawler.on 'end', (err, mov) ->
  console.log err
  console.log mov
