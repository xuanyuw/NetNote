read the meta data in each md file
add children to ptopic json
add ptopic to ctopic json
add author to author json
(if the topic name does not exist, create a new object, else add 1 to the count)

in ctopic:

- Title
 - related ctopics
 - ctopic name 
    - number of connections
  - related ptopics
    - ptopic name
      - number of connection


in ptopics:

- title 
- children 
  - child topic name
    - number of notes in this child topic
  - related ptopics
    - ptopic name
      - number of connections


in authors:


