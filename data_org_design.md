# Data Linking Design

## Display

- in each parent topic page, show:
- in each child topic page, show:
  - related parent topics
  - child topics of each respective parent topic
  - related notes in each child topic
- in each file page, show:
  - author information as toast
  - related children topics
    - drop down menu showing specific notes

## want to achieve

1. classify file (author, ctopics, and ptopics) using meta data before each note
2. link files

## Using metadata

automatically:
add children to **ptopic json**
add ptopic to **ctopic json**
add author to **author json**, and connect author with ctopic and ptopics
(if the topic name does not exist, create a new object, else add 1 to the count)

## File-file link

### creating and editing

- within file page, toast
- creating link :
  - use search box to input the title, once the title is clicked, update the ctopic file with newly-created file alias
  - select from a menu of ctopic
- search:
  - keep a file containing all the metadata of files
  - implementing auto-completion on the titles
  - use title to find alias key
- remove link:
  - right click on the already created link, show remove button, then show confirmation toast.

## Files

### Objectives

- each ptopic can have multiple ctopics
- each ctopic can have multiple ptopics as well

### ctopic

key = underscored lowercase name

#### creating and editing

- asking for ptopic
- can add ptopic at any time

#### components

- Title (for display)
- its ptopic
- related authors
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

#### creating and editing

- Input author information in a separate page
- If the author in the metatdata does not exist yet, use pop-up toast to remind creating author, with a link to the creation page
- Add corresponding information in **authors.json** and **ctopics.json**

#### components

key = underscored lowercase name

- Name (for display)
- Organization
- H-index or citation
- Research interest
- related ctopic (added using metadata)
  - list of aliases of related notes in this ctopic

## Notes

key = alias for each note
value = actual link to the note page

## author info

key = same key in authors
value = actual link to the author info page
