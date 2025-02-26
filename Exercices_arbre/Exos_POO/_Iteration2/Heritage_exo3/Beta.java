
public class Beta extends Coronavirus {
    public Beta(String variant) {
        super(variant);
    }

    @Override
    public void affiche() {
        System.out.println("Variant Beta : " + variant);
    }
}
