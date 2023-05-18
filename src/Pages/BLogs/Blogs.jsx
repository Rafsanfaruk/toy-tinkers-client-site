// import React from 'react';

const Blogs = () => {
  return (
    <div className="my-container">
      <h3 className="font-bold text-xl">
        # What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h3>
      <br />
      <p>
        -- Access tokens should be stored on the client-side, usually in memory
        or in a client-side session, as they are short-lived and need to be sent
        with each request.
      </p>
      <p>
        -- Refresh tokens, on the other hand, should be stored securely on the
        client-side to prevent unauthorized access.
      </p>
      <br />
      <h3 className="font-bold text-xl"># Compare SQL and NoSQL databases?</h3>
      <p> -- Structure: SQL databases are based on a structured schema that defines the tables, columns, and relationships between them. They follow a rigid structure and enforce data integrity through predefined schemas, and are Data Representation,Query Language,Scalability. Examples: MySQL, PostgreSQL, Oracle, MS SQL Server.</p>
      <p> -- Structure: NoSQL databases are schema-less or have flexible schemas, allowing the storage of unstructured or semi-structured data. They are more dynamic and adaptable to changing data requirements.Examples: MongoDB (document-based), Cassandra (column-family), Redis (key-value), Neo4j (graph-based).</p>

      <br />
      <h3 className="font-bold text-xl">
        # What is express js? What is Nest JS ?
      </h3>
      <p>-- Express.js is a minimalistic and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs, making it one of the most popular choices among Node.js developers. Express.js is known for its simplicity and lightweight nature, allowing developers to create server-side applications quickly. It provides a routing system, middleware support, and integration with various templating engines and databases. Express.js is highly extensible, allowing developers to add additional functionality through middleware and third-party modules.</p>
      <p>-- NestJS, on the other hand, is a progressive Node.js framework for building efficient and scalable server-side applications. It is built on top of Express.js and incorporates concepts from object-oriented programming, functional programming, and reactive programming. NestJS follows the modular and dependency injection principles, making it easy to organize and test applications. It provides a powerful CLI (Command Line Interface) for generating project scaffolding and code generation. NestJS also includes support for TypeScript, decorators, middleware, dependency injection, and a module-based architecture. It is often used for building enterprise-grade applications and APIs.</p>
      <br />
      <h3 className="font-bold text-xl">
        # What is MongoDB aggregate and how does it work?
      </h3>
      <p> -- In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections.Here is an overview of the stages commonly used in the aggregation pipeline:
        <li>
        match: Filters the documents in the collection based on specified criteria.
        </li>
        <li>
        group: Groups the documents based on a specified key or keys and performs aggregation operations on the grouped data
        </li>
        <li>
        sort: Sorts the documents based on specified criteria, typically used to order the output of the aggregation pipeline.
        </li>
        <li>
        lookup: Performs a left outer join between documents in the current collection and documents from another collection. It allows you to enrich your data by including related information from other collections.
        </li>
        </p>
    </div>
  );
};

export default Blogs;
