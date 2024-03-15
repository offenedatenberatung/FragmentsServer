/*! @license ©2014–2017 Ruben Verborgh, Ghent University - imec */
/** An N3Datasource fetches data from Turtle/TriG/N-Triples/N-Quads/N3 documents. */

let MemoryDatasource = require('@ldf/core').datasources.MemoryDatasource,
    RdfXmlParser = require('rdfxml-streaming-parser').RdfXmlParser;

let ACCEPT = 'application/rdf-xml;q=1.0,application/xml;q=0.9';

// Creates a new N3Datasource
class XMLDatasource extends MemoryDatasource {
  constructor(options) {
    super(options);
    this._url = options && (options.url || options.file);
  }

  // Retrieves all quads from the document
  _getAllQuads(addQuad, done) {
    let document = this._fetch({ url: this._url, headers: { accept: ACCEPT } }, done);
      const parser = new RdfXmlParser({ dataFactory: this.dataFactory });
    /*
    console.log(parser)
console.log(typeof(document))
      document.pipe(parser)
      document.on('error', (error) => done(error));
      document.on('data', (data) => addQuad(data));
      document.on('end', () => done(null));
      */
/* 
 *new RdfXmlParser({
  dataFactory: require('@rdfjs/data-model'),
  baseIRI: 'http://example.org/',
  defaultGraph: namedNode('http://example.org/graph'),
  strict: true,
  trackPosition: true,
  allowDuplicateRdfIds: true,
  validateUri: true,
});
*/
    /*new N3Parser({ factory: this.dataFactory }).parse(document, (error, quad) => {
      quad ? addQuad(quad) : done(error);
    });
    */
  }
}

module.exports = XMLDatasource;
