import { MouseEvent } from "react";
import { FormattedMessage } from "react-intl";
import { defaultStyles } from "styles/components/formatted-message/FormattedMessageToHTMLStyles";

interface Props {
  id: string;
  additionalValues?: Object;
}

export const FormattedMessageToHTML = ({ id, additionalValues }: Props) => {
  const getDetailsParentElement = (event: MouseEvent): void => {
    const detailParentElement =
      event.currentTarget.parentNode?.parentNode?.parentElement;
    detailParentElement?.hasAttribute("open") &&
      detailParentElement?.attributes.removeNamedItem("open");
  };

  const values: any = {
    strong: (chunks: any) => <strong>{chunks}</strong>,
    br: <br />,
    cite: (chunks: any) => <cite>{chunks}</cite>,
    details: (chunks: any) => <details>{chunks}</details>,
    summary: (chunks: any) => <summary>{chunks}</summary>,
    "sum-tooltip": (chunks: any) => (
      <div className="sum-tooltip">
        <button
          className="sum-tooltip-close-btn"
          onClick={getDetailsParentElement}
        >
          <FormattedMessage id="details.close-button" />
        </button>
        {chunks}
      </div>
    ),
    "sum-tooltip-container": (chunks: any) => (
      <div className="sum-tooltip-container">{chunks}</div>
    ),
    ...additionalValues,
  };

  return (
    <>
      <FormattedMessage id={id} defaultMessage="Content" values={values} />
      <style jsx>{defaultStyles}</style>
    </>
  );
};
