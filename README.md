# 👋 nodejs GraphQL starting point
- schema
- resolver: responsibile for accepting the query
- configuration

# Query example
query {
  getCourse(id: "8NdwfKEPl0lLdeCKTWJWx"){
    courseName
  }
}

# Mutation example
mutation {
 createCourse(input: {
  courseName: "js3",
  price: 199,
  stack: WEB,
  teachingAssists:[]
}){
  id,
  courseName
}
}