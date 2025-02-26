import java.util.ArrayList;

public class TestMetiers {
    public static void main(String[] argv) {
        ArrayList<Coronavirus> coronavirusList = new ArrayList<Coronavirus>();

        coronavirusList.add(new Alpha("B.1.1.7"));
        coronavirusList.add(new Beta("B.1.351"));
        coronavirusList.add(new Gamma("P.1"));
        coronavirusList.add(new Omicron("B.1.1.529"));
        coronavirusList.add(new Gamma("P.1"));
        coronavirusList.add(new Delta("B.1.617.2"));
        coronavirusList.add(new Omicron("B.1.1.529"));
        coronavirusList.add(new Alpha("B.1.1.7"));
        coronavirusList.add(new Omicron("B.1.1.529"));

        coronavirusList.forEach(element -> {
            element.affiche();
        });
    }

}

