
# Data Linking Design

## Objectives

- no file-file connection 
  - too messy
  - little needs for the user cases
- only show the connection up to the child topic level
  - in each child topic page, show:
    - related parent topics 
    - child topics of each respective parent topic
    - related notes in each child topic 
  - can consider make the content in the page foldable (do not display the filenames first)

## want to achieve

1. classify file (author, ctopics, and ptopics) using meta data before each note
2. link files with link within text

## Using metadata

add children to **ptopic json**
add ptopic to **ctopic json**
add author to **author json**, and connect author with ctopic and ptopics
(if the topic name does not exist, create a new object, else add 1 to the count)

## Using in-text link (need more consideration)

add a marker to indicate it's a link
create an alias for each note, use this alias to create connection.

## Files

### ctopic

key = underscored lowercase name

- Title (for display)
- list of note names under this ctopic
- related ctopics
  - ctopic name
    - list of aliases of related notes
- related ptopics
  - ptopic name
    - related ctopic name in this ptopic
      - list of aliases of related notes

### ptopic

key = underscored lowercase name

- Title (for display)
- children
  - ctopic name
    - number of notes in this ctopic
  - related ptopics
    - ptopic name
      - number of connections
  
If want to display all the notes in this ptopic, find the names of the notes in each ctopic in ctopic json
If want to display the connection between ptopic, pull data from the 'related ptopic' section of each ctopic of the ptopic in ctopic json, then summing them up.

### authors

key = underscored lowercase name

- Name (for display)
- related ptopics
  - related ptopic names
    - related ctopic in this ptopic
      - list of aliases of related notes in this ctopic

## notes

key = alias for each note
value = actual link to the note page

## author info

key = same key in authors
value = actual link to the author info page