package com.anbuicomponents

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.AnbUiComponentsViewManagerInterface
import com.facebook.react.viewmanagers.AnbUiComponentsViewManagerDelegate

@ReactModule(name = AnbUiComponentsViewManager.NAME)
class AnbUiComponentsViewManager : SimpleViewManager<AnbUiComponentsView>(),
  AnbUiComponentsViewManagerInterface<AnbUiComponentsView> {
  private val mDelegate: ViewManagerDelegate<AnbUiComponentsView>

  init {
    mDelegate = AnbUiComponentsViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<AnbUiComponentsView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): AnbUiComponentsView {
    return AnbUiComponentsView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: AnbUiComponentsView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "AnbUiComponentsView"
  }
}
