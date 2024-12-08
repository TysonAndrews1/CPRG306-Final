export default function CharacterSheet({ dndCharacterValues }) {
    return (
        <div>
            <h1>Character Sheet</h1>
            <p>Name: {dndCharacterValues.name}</p>
            <p>Class: {dndCharacterValues.class}</p>
            <p>Level: {dndCharacterValues.level}</p>
            <p>Background: {dndCharacterValues.background}</p>
        </div>
    );
}