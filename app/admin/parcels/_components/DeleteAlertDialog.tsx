import AlertDialog from "@/_components/AlertDialog";
import { useDeleteParcelStore } from "../_providers/DeleteParcelProvider";
import useDeleteParcelMutation from "@/_hooks/mutations/useDeleteParcelMutation";
import { useToast } from "@chakra-ui/react";

const DeleteParcelAlertDialog = () => {
  const toast = useToast();
  const { open, id, resetState } = useDeleteParcelStore((state) => state);
  const { mutateAsync, status } = useDeleteParcelMutation();

  const handleConfirm = async () => {
    if (!id) return;

    try {
      await mutateAsync({ id });
      resetState();
      toast({
        title: "Berhasil menghapus paket",
        description: "Paket berhasil dihapus",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Gagal menghapus paket",
        description: "Terjadi kesalahan saat menghapus paket",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <AlertDialog
      isOpen={open}
      onClose={() => resetState()}
      title="Hapus paket"
      description="Apakah anda yakin menghapus paket ini ?"
      onConfirm={() => handleConfirm()}
      confirmButtonProps={{
        isLoading: status === "pending",
      }}
    />
  );
};

export default DeleteParcelAlertDialog;
