
public class Gamma extends Coronavirus {
    public Gamma(String variant) {
        super(variant);
    }

    @Override
    public void affiche() {
        System.out.println("Variant Gamma : " + variant);
    }
}