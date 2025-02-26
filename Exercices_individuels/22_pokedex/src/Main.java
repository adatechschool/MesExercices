import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        try {
            // on lit le fichier JSON
            String content = Files.readString(Path.of("pokedex.json"));
            
            // on parse le contenu en JSON
            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(content);
            
            JSONArray pokemons = (JSONArray) jsonObject.get("pokemon");
                        
            for (int i = 0; i < pokemons.size(); i++) {
                JSONObject p = (JSONObject) pokemons.get(i);
                System.out.println(p.get("id") + " - " + p.get("name") + " - " + p.get("type"));
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
    }
}
