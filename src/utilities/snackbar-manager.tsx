import { useSnackbar, VariantType, ProviderContext } from "notistack";

let useSnackbarRef: ProviderContext;

export const SnackbarUtilitiesConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();

  return null;
};

export const SnackbarUtilities = {
  toast(msg: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant,
    });
  },
  success(mes: string) {
    this.toast(mes, "success");
  },
  error(mes: string) {
    this.toast(mes, "error");
  },
  warning(mes: string) {
    this.toast(mes, "warning");
  },
  info(mes: string) {
    this.toast(mes, "info");
  },
};
