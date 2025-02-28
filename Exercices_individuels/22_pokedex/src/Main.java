import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        try {
            //on lit du fichier JSON
            String content = Files.readString(Path.of("pokedex.json"));
            
            //parsing du contenu JSON
            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(content);
            
            List<JSONObject> pokemons = new ArrayList<>();
            
            //on remplit la liste avec les objets JSON
            for (Object obj : (List<?>) jsonObject.get("pokemon")) {
                pokemons.add((JSONObject) obj);
            }

            //on affiche les pokemons
            for (JSONObject p : pokemons) {
                System.out.println(p.get("id") + " - " + p.get("name") + " - " + p.get("type"));
            }

            //on appelle les méthodes
            System.out.println("Il y a " + count(pokemons) + " pokémons dans le pokédex.");
            System.out.println("Pokémons de plus de 10kg :");
            weight(pokemons);
            sortByWeight(pokemons);


        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
    }
    
    //méthode count
    public static int count(List<JSONObject> pokemons) {
        return pokemons.size();
    }

    //méthode weight
    public static void weight(List<JSONObject> pokemons) {
        for (JSONObject p : pokemons) {
            double weight = Double.parseDouble(((String) p.get("weight")).replace(" kg", ""));
            if (weight > 10) {
                System.out.println(p.get("name") + " - " + weight + " kg");
            }
        }
    }

    //méthode sortByWeight
    public static void sortByWeight(List<JSONObject> pokemons) {
        pokemons.sort(Comparator.comparingDouble(p -> Double.parseDouble(((String) p.get("weight")).replace(" kg", ""))));
        
        System.out.println("Pokemons triés par poids croissant :");
        for (JSONObject p : pokemons) {
            System.out.println(p.get("name") + " - " + p.get("weight"));
        }
    }
}