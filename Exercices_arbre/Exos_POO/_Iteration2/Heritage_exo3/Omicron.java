public class Omicron extends Coronavirus {
    public Omicron(String variant) {
        super(variant);
    }

    @Override
    public void affiche() {
        System.out.println("Variant Omicron : " + variant);
    }
}
